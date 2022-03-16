import Calendrier from "../component/Calendrier";
import FetchEtudiant from "../component/FetchEtudiant";

function Home() {
    return (
      <>
      <div className="homePage">
        <div className="calendrier">
            <h2>
              Calendrier
            </h2>
                <table id="calendrier_absences"><tbody><tr>
                <td><div className="calendrier"><table><tbody><tr><td></td><th colSpan="8">janvier 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td className="num_semaine">52</td><td></td><td></td><td></td><td></td><td></td><td className="jour">1</td><td className="jour">2
            </td></tr><tr><td className="num_semaine">1</td><td className="jour">3</td><td className="jour">4</td><td className="jour">5</td><td className="jour">6</td><td className="jour">7</td><td className="jour">8</td><td className="jour">9
            </td></tr><tr><td className="num_semaine">2</td><td className="jour">10</td><td className="jour">11</td><td className="jour">12</td><td className="jour">13</td><td className="jour">14</td><td className="jour">15</td><td className="jour">16
            </td></tr><tr><td className="num_semaine">3</td><td className="jour">17</td><td className="jour">18</td><td className="jour">19</td><td className="jour">20</td><td className="jour">21</td><td className="jour">22</td><td className="jour">23
            </td></tr><tr><td className="num_semaine">4</td><td className="jour">24</td><td className="jour">25</td><td className="jour">26</td><td className="jour">27</td><td className="jour">28</td><td className="jour">29</td><td className="jour">30
            </td></tr><tr><td className="num_semaine">5</td><td className="jour">31</td></tr></tbody></table></div>
                </td><td><div className="calendrier"><table><tbody><tr><td></td><th colSpan="8">février 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td className="num_semaine">5</td><td></td><td className="jour">1</td><td className="jour">2</td><td className="jour">3</td><td className="jour">4</td><td className="jour">5</td><td className="jour">6
            </td></tr><tr><td className="num_semaine">6</td><td className="jour">7</td><td className="jour">8</td><td className="jour">9</td><td className="jour">10</td><td className="jour">11</td><td className="jour">12</td><td className="jour">13
            </td></tr><tr><td className="num_semaine">7</td><td className="jour">14</td><td className="jour">15</td><td className="jour">16</td><td className="jour">17</td><td className="jour">18</td><td className="jour">19</td><td className="jour">20
            </td></tr><tr><td className="num_semaine">8</td><td className="jour">21</td><td className="jour">22</td><td className="jour">23</td><td className="jour">24</td><td className="jour">25</td><td className="jour">26</td><td className="jour">27
            </td></tr><tr><td className="num_semaine">9</td><td className="jour">28</td></tr></tbody></table></div>
                </td><td><div className="calendrier"><table><tbody><tr><td></td><th colSpan="8">mars 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td className="num_semaine">9</td><td></td><td className="jour">1</td><td className="jour">2</td><td className="jour">3</td><td className="jour">4</td><td className="jour">5</td><td className="jour">6
            </td></tr><tr><td className="num_semaine">10</td><td className="jour">7</td><td className="jour">8</td><td className="jour">9</td><td className="jour">10</td><td className="jour">11</td><td className="jour">12</td><td className="jour">13
            </td></tr><tr><td className="num_semaine">11</td><td className="jour">14</td><td className="jour">15</td><td className="jour">16</td><td className="jour">17</td><td className="jour">18</td><td className="jour">19</td><td className="jour">20
            </td></tr><tr><td className="num_semaine">12</td><td className="jour">21</td><td className="jour">22</td><td className="jour">23</td><td className="jour">24</td><td className="jour">25</td><td className="jour">26</td><td className="jour">27
            </td></tr><tr><td className="num_semaine">13</td><td className="jour">28</td><td className="jour">29</td><td className="jour">30</td><td className="jour">31</td></tr></tbody></table></div>
                </td><td><div className="calendrier"><table><tbody><tr><td></td><th colSpan="8">avril 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td className="num_semaine">13</td><td></td><td></td><td></td><td></td><td className="jour">1</td><td className="jour">2</td><td className="jour">3
            </td></tr><tr><td className="num_semaine">14</td><td className="jour">4</td><td className="jour">5</td><td className="jour">6</td><td className="jour">7</td><td className="jour">8</td><td className="jour">9</td><td className="jour">10
            </td></tr><tr><td className="num_semaine">15</td><td className="jour">11</td><td className="jour">12</td><td className="jour">13</td><td className="jour">14</td><td className="jour">15</td><td className="jour">16</td><td className="jour">17
            </td></tr><tr><td className="num_semaine">16</td><td className="jour">18</td><td className="jour">19</td><td className="jour">20</td><td className="jour">21</td><td className="jour">22</td><td className="jour">23</td><td className="jour">24
            </td></tr><tr><td className="num_semaine">17</td><td className="jour">25</td><td className="jour">26</td><td className="jour">27</td><td className="jour">28</td><td className="jour">29</td><td className="jour">30</td></tr></tbody></table></div>
                </td><td><div className="calendrier"><table><tbody><tr><td></td><th colSpan="8">mai 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td className="num_semaine">17</td><td></td><td></td><td></td><td></td><td></td><td></td><td className="jour">1
            </td></tr><tr><td className="num_semaine">18</td><td className="jour">2</td><td className="jour">3</td><td className="jour">4</td><td className="jour">5</td><td className="jour">6</td><td className="jour">7</td><td className="jour">8
            </td></tr><tr><td className="num_semaine">19</td><td className="jour">9</td><td className="jour">10</td><td className="jour">11</td><td className="jour">12</td><td className="jour">13</td><td className="jour">14</td><td className="jour">15
            </td></tr><tr><td className="num_semaine">20</td><td className="jour">16</td><td className="jour">17</td><td className="jour">18</td><td className="jour">19</td><td className="jour">20</td><td className="jour">21</td><td className="jour">22
            </td></tr><tr><td className="num_semaine">21</td><td className="jour">23</td><td className="jour">24</td><td className="jour">25</td><td className="jour">26</td><td className="jour">27</td><td className="jour">28</td><td className="jour">29
            </td></tr><tr><td className="num_semaine">22</td><td className="jour">30</td><td className="jour">31</td></tr></tbody></table></div>
                </td><td><div className="calendrier"><table><tbody><tr><td></td><th colSpan="8">juin 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td className="num_semaine">22</td><td></td><td></td><td className="jour">1</td><td className="jour">2</td><td className="jour">3</td><td className="jour">4</td><td className="jour">5
            </td></tr><tr><td className="num_semaine">23</td><td className="jour">6</td><td className="jour">7</td><td className="jour">8</td><td className="jour">9</td><td className="jour">10</td><td className="jour">11</td><td className="jour">12
            </td></tr><tr><td className="num_semaine">24</td><td className="jour">13</td><td className="jour">14</td><td className="jour">15</td><td className="jour">16</td><td className="jour">17</td><td className="jour">18</td><td className="jour">19
            </td></tr><tr><td className="num_semaine">25</td><td className="jour">20</td><td className="jour">21</td><td className="jour">22</td><td className="jour">23</td><td className="jour">24</td><td className="jour">25</td><td className="jour">26
            </td></tr><tr><td className="num_semaine">26</td><td className="jour">27</td><td className="jour">28</td><td className="jour">29</td><td className="jour">30</td></tr></tbody></table></div>
                </td><td><div className="calendrier"><table><tbody><tr><td></td><th colSpan="8">juillet 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td className="num_semaine">26</td><td></td><td></td><td></td><td></td><td className="jour">1</td><td className="jour">2</td><td className="jour">3
            </td></tr><tr><td className="num_semaine">27</td><td className="jour">4</td><td className="jour">5</td><td className="jour">6</td><td className="jour">7</td><td className="jour">8</td><td className="jour">9</td><td className="jour">10
            </td></tr><tr><td className="num_semaine">28</td><td className="jour">11</td><td className="jour">12</td><td className="jour">13</td><td className="jour">14</td><td className="jour">15</td><td className="jour">16</td><td className="jour">17
            </td></tr><tr><td className="num_semaine">29</td><td className="jour">18</td><td className="jour">19</td><td className="jour">20</td><td className="jour">21</td><td className="jour">22</td><td className="jour">23</td><td className="jour">24
            </td></tr><tr><td className="num_semaine">30</td><td className="jour">25</td><td className="jour">26</td><td className="jour">27</td><td className="jour">28</td><td className="jour">29</td><td className="jour">30</td><td className="jour">31</td></tr></tbody></table></div>
                </td><td><div className="calendrier"><table><tbody><tr><td></td><th colSpan="8">août 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D
            </th></tr><tr><td className="num_semaine">31</td><td className="jour">1</td><td className="jour">2</td><td className="jour">3</td><td className="jour">4</td><td className="jour">5</td><td className="jour">6</td><td className="jour">7
            </td></tr><tr><td className="num_semaine">32</td><td className="jour">8</td><td className="jour">9</td><td className="jour">10</td><td className="jour">11</td><td className="jour">12</td><td className="jour">13</td><td className="jour">14
            </td></tr><tr><td className="num_semaine">33</td><td className="jour">15</td><td className="jour">16</td><td className="jour">17</td><td className="jour">18</td><td className="jour">19</td><td className="jour">20</td><td className="jour">21
            </td></tr><tr><td className="num_semaine">34</td><td className="jour">22</td><td className="jour">23</td><td className="jour">24</td><td className="jour">25</td><td className="jour">26</td><td className="jour">27</td><td className="jour">28
            </td></tr><tr><td className="num_semaine">35</td><td className="jour">29</td><td className="jour">30</td><td className="jour">31</td></tr></tbody></table></div>
            </td></tr></tbody></table>
        </div>
        
          <div className="information">
            <h2>
              Informations
            </h2>
            <FetchEtudiant />
          </div>
      </div>
      <div className="h2Btn">
        <h2>Semestres</h2>
        </div>
      <div className="ligneBtnSem">
        <div className="btnSem">
            <p>S1</p>
            </div>
          <div className="btnSem">
            <p>S2</p>
            </div>
          <div className="btnSem">
            <p>S3</p>
            </div>
          <div className="btnSem">
            <p>S4</p>
            </div>
          <div className="btnSem">
            <p>S5</p>
            </div>
          <div className="btnSem">
            <p>S6</p>
            </div>
      </div>
      </>
    );
  }
  
  export default Home;