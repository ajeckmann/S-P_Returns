import React from "react";

export default function Table(props) {
  //function to display the cumulative returns from start year to given year
  function cumulativeData(index) {
    let sum = 0;
    for (var i = 0; i <= index; i++) {
      sum += parseFloat(props.data[i].totalReturn);
    }

    return sum.toFixed(2);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <div className="pl-0">
            <h3 className="headline">S&P 500 Total Returns </h3>
            <h3 className="headline">
              <span className="early_year mr-10">{props.lowerBound}</span> to{" "}
              <span className="late_year">{props.upperBound}</span>
            </h3>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Return</th>
                  <th scope="col">Cumulative Return </th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((d, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{d.year}</td>
                      <td
                        className={d.totalReturn < 0 ? "negative-return" : null}
                      >
                        {d.totalReturn}
                      </td>
                      <td
                        //ternary operartor so that negative returns will be displayed in red//
                        className={
                          cumulativeData(idx) < 0 ? "negative-return" : null
                        }
                      >
                        {cumulativeData(idx)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
