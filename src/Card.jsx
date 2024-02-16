import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faCalendar, faClipboard, faComment, faDollar } from '@fortawesome/free-solid-svg-icons'

Card.propTypes = {
  data: {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  },
};

function Card({ data }) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${data.style} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
            <div className={`text-xs font-weight-bold text-${data.style} text-uppercase mb-1`}>
                    {data.title}
                  </div>
              {data.type === "currency" && (
                <>
               
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {data.value}
                  </div>
                </>
              )}

              {data.type === "progress" && (
                <>
                  {" "}
                 
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                       {data.value}
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: `${data.value}` }}
                          aria-valuenow={data.value}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {data.type === "number" && (
                <>
                  
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {data.value}
                  </div>
                </>
              )}
            </div>
            <div className="col-auto">
              {/* <i className="fas fa-calendar fa-2x text-gray-300"></i> */}
              {/* <FontAwesomeIcon icon={faCoffee} /> */}

              {
                data.icon === "calender" && <FontAwesomeIcon className="fa-2x text-gray-300" icon={faCalendar} />
              }

              {
                data.icon === "dollor" && <FontAwesomeIcon className="fa-2x text-gray-300" icon={faDollar} />
              }

              {
                data.icon === "clipboard" && <FontAwesomeIcon className="fa-2x text-gray-300" icon={faClipboard} />
              }

              {
                data.icon === "comments" && <FontAwesomeIcon className="fa-2x text-gray-300" icon={faComment} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
