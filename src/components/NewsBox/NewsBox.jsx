import React from "react";
import "./NewsBox.css";
import imgUni from "../../assets/images/img-man.png";
import company from "../../assets/images/company.png";
import img from "../../assets/images/img.png";
import compete from "../../assets/images/compete.png";
import uni from "../../assets/images/uni.png";
import news from "../../assets/images/news.png"
 

function NewsBox() {
  return (
    <div className="container-fluid">
      <div className="container-box">
        <div className="news-box">
          <h3>university news</h3>
          <ul>
            <li>
              <img src={imgUni} alt="img" />
              <h3>
                Hossein Reza reported; Najaf Abad Azad University won 6 ranks in
                the second festival of growth
              </h3>
              <div className="footer">
                <span>1401/08/01</span>
                <a href="https://news.iaun.ac.ir/university/2307">view</a>
              </div>
            </li>
            <li>
              <img src={company} alt="img" />
              <h3>
                Hossein Reza reported; Najaf Abad Azad University won 6 ranks in
                the second festival of growth
              </h3>
              <div className="footer">
                <span>1401/08/01</span>
                <a href="https://news.iaun.ac.ir/university/2307">view</a>
              </div>
            </li>
            <li>
              <img src={img} alt="img" />
              <h3>
                Hossein Reza reported; Najaf Abad Azad University won 6 ranks in
                the second festival of growth
              </h3>
              <div className="footer">
                <span>1401/08/01</span>
                <a href="https://news.iaun.ac.ir/university/2307">view</a>
              </div>
            </li>
            <li>
              <img src={compete} alt="img" />
              <h3>
                Hossein Reza reported; Najaf Abad Azad University won 6 ranks in
                the second festival of growth
              </h3>
              <div className="footer">
                <span>1401/08/01</span>
                <a href="https://news.iaun.ac.ir/university/2307">view</a>
              </div>
            </li>
            <li>
              <img src={uni} alt="img" />
              <h3>
                Hossein Reza reported; Najaf Abad Azad University won 6 ranks in
                the second festival of growth
              </h3>
              <div className="footer">
                <span>1401/08/01</span>
                <a href="https://news.iaun.ac.ir/university/2307">view</a>
              </div>
            </li>
            <li>
              <img src={news} alt="img" />
              <h3>
                Hossein Reza reported; Najaf Abad Azad University won 6 ranks in
                the second festival of growth
              </h3>
              <div className="footer">
                <span>1401/08/01</span>
                <a href="https://news.iaun.ac.ir/university/2307">view</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewsBox;
