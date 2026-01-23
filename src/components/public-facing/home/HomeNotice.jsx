const notices = [
  {
    title: "Admissions Open 2026",
    meta: "Admissions",
    date: "Jan 2026",
  },
  {
    title: "Semester Examination Schedule",
    meta: "Academics",
    date: "Feb 2026",
  },
  {
    title: "Annual Cultural Fest – UTSAV",
    meta: "Events",
    date: "Mar 2026",
  },
];

const NoticeBoard = () => {
  return (
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                What’s Happening Now?
              </h2>
              <p className="mt-2 text-sm text-muted">
                Stay updated with the latest announcements from campus.
              </p>
            </div>

            <button className="
            text-sm font-medium
            text-primary
            hover:underline
          ">
              View All Notices →
            </button>
          </div>

          {/* Notice List */}
          <div className="
          divide-y
          divide-border
          rounded-2xl
          border border-border
          bg-surface
          shadow-shadow-sm
        ">
            {notices.map((n, i) => (
                <div
                    key={i}
                    className="
                flex items-center justify-between
                px-6 py-4
                transition
                hover:bg-overlay
              "
                >
                  <div>
                    <div className="text-sm font-medium">
                      {n.title}
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      {n.meta}
                    </div>
                  </div>

                  <div className="text-xs text-muted">
                    {n.date}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default NoticeBoard;
