(function () {
  const activities = [
    {
      date: "2024-02-16 星期二",
      items: [
        { time: "12:54", type: "客户动态", text: "客户 张三 添加 员工 李四" },
        { time: "09:54", type: "客群动态", text: "客户 张三 进入 客群 活动一群" },
      ],
    },
    {
      date: "2024-02-15 星期一",
      items: [
        { time: "12:54", type: "客户动态", text: "客户 张三 添加 员工 李四" },
        { time: "09:54", type: "客群动态", text: "客户 张三 进入 客群 活动一群" },
      ],
    },
  ];

  function byId(id) {
    return document.getElementById(id);
  }

  function renderActivities() {
    const stream = byId("activity-stream");
    if (!stream) {
      return;
    }

    stream.innerHTML = activities
      .map(function (group) {
        const rows = group.items
          .map(function (item) {
            return (
              '<article class="activity-item">' +
              '<div class="activity-meta"><span>' +
              item.time +
              '</span><span>' +
              item.type +
              "</span></div>" +
              '<p class="activity-text">' +
              item.text +
              "</p>" +
              "</article>"
            );
          })
          .join("");

        return '<p class="activity-date">' + group.date + "</p>" + rows;
      })
      .join("");
  }

  function refreshLiveNumbers() {
    document.querySelectorAll("[data-live='1']").forEach(function (node) {
      const value = Number(node.textContent.replace(/,/g, ""));
      if (Number.isNaN(value)) {
        return;
      }
      const next = Math.max(0, value + Math.floor(Math.random() * 20) - 8);
      node.textContent = next.toLocaleString("en-US");
    });
  }

  function bindTabGroup(containerId, itemClass) {
    const container = byId(containerId);
    if (!container) {
      return;
    }

    container.addEventListener("click", function (event) {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.classList.contains(itemClass)) {
        return;
      }
      container.querySelectorAll("." + itemClass).forEach(function (tab) {
        tab.classList.remove("active");
      });
      target.classList.add("active");
    });
  }

  function downloadCsv() {
    const rows = ["date,time,type,text"];
    activities.forEach(function (group) {
      group.items.forEach(function (item) {
        rows.push([group.date, item.time, item.type, item.text].join(","));
      });
    });

    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "scrm-home-report.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function bindEvents() {
    const refreshBtn = byId("btn-refresh");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", refreshLiveNumbers);
    }

    const exportBtn = byId("btn-export");
    if (exportBtn) {
      exportBtn.addEventListener("click", downloadCsv);
    }

    bindTabGroup("module-tabs", "module-tab");
    bindTabGroup("trend-range", "tab");

    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const card = target.closest(".is-clickable");
      if (!(card instanceof HTMLElement)) {
        return;
      }

      const link = card.dataset.link;
      if (link) {
        window.location.href = link;
      }
    });
  }

  function init() {
    renderActivities();
    bindEvents();
    setInterval(refreshLiveNumbers, 30000);
  }

  init();
})();

