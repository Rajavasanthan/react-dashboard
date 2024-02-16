import Card from "./Card";

function Dashboard() {
  let cards = [
    {
      title: "Earnings (Monthly)",
      type: "currency",
      style: "primary",
      icon: "calender",
      value: "$56,000",
    },
    {
      title: "Earnings (ANNUAL)",
      type: "currency",
      style: "success",
      icon: "dollor",
      value: "$34,000",
    },
    {
      title: "Tasks",
      type: "progress",
      style: "info",
      icon: "clipboard",
      value: "30%",
    },
    {
      title: "Pending Requests",
      type: "number",
      style: "warning",
      icon: "comments",
      value: "18",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        {cards.map((card, index) => {
          return <Card key={index} data={card} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
