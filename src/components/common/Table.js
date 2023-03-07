export const Table = () => {
  const contactData = [
    {
      name: "Mr Robert Antibalin",
      jobTitle: "Partner, Co-head of golabal imapct",
      location: " New Yorker,USA",
      email: "",
      id: 1,
    },
    {
      name: "Mr Anzail Antibalin",
      jobTitle: "EMAEA Principal Corporate",
      location: "London Uk",
      email: "",
      id: 2,
    },
    {
      name: "Mr.Jesse Antibalin",
      jobTitle: "Vice President, Co-head of Investing",
      location: " New Yorker,USA",
      email: "",
      id: 3,
    },
    {
      name: "Mr Anzail Antibalin",
      jobTitle: "Managing Director Head of EMAEA ",
      location: "London Uk",
      email: "",
      id: 4,
    },
  ];

  return (
    <>
      <div className="table-data">
        <div className="grid-table">
          <div className="grid-table-row">
            <div className="grid-table-cell">Name</div>
            <div className="grid-table-cell">Job title</div>
            <div className="grid-table-cell">Location</div>
            <div className="grid-table-cell">Email</div>
          </div>
          <div className="grid-table-row">
            {contactData?.map((data) => {
              return (
                <>
                  <div
                    className="grid-table-cell table-name"
                    data-title="Title"
                  >
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <span>{data.name}</span>
                  </div>
                  <div className="grid-table-cell" data-title="Number">
                    {data.jobTitle}
                  </div>
                  <div className="grid-table-cell" data-title="Series">
                    {data.location}
                  </div>
                  <div
                    className="grid-table-cell table-lock"
                    data-title="Air Date"
                  >
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <hr></hr>
                    {data.email}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <p className="text-contact">Showing 4 of 20 BlockRock Contacts</p>
        <div className="block-info">
          Get access to all BlockRock contact information
        </div>
      </div>
    </>
  );
};
