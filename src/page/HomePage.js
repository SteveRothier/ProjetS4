import Navbar from '../component/Navbar.js';
import BoutonSemestre from "../component/BoutonSemestre";
import Calendrier from "../component/Calendrier";
import FetchEtudiant from "../component/FetchEtudiant";
import FetchNote from "../component/FetchNote";
import './style/HomePage.css';

function Home() {
    return (
      <>
        <Navbar/>
        <div className="infoCalend">
          <div className="calendrier">
            <h2>
              Calendrier
            </h2>
                        <table id="calendrier_absences"><tbody><tr>
                <td><div class="calendrier"><table><tbody><tr><td></td><th colspan="8">janvier 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td class="num_semaine">52</td><td></td><td></td><td></td><td></td><td></td><td class="jour">1</td><td class="jour">2
            </td></tr><tr><td class="num_semaine">1</td><td class="jour">3</td><td class="jour">4</td><td class="jour">5</td><td class="jour">6</td><td class="jour">7</td><td class="jour">8</td><td class="jour">9
            </td></tr><tr><td class="num_semaine">2</td><td class="jour">10</td><td class="jour">11</td><td class="jour">12</td><td class="jour">13</td><td class="jour">14</td><td class="jour">15</td><td class="jour">16
            </td></tr><tr><td class="num_semaine">3</td><td class="jour">17</td><td class="jour">18</td><td class="jour">19</td><td class="jour">20</td><td class="jour">21</td><td class="jour">22</td><td class="jour">23
            </td></tr><tr><td class="num_semaine">4</td><td class="jour">24</td><td class="jour">25</td><td class="jour">26</td><td class="jour">27</td><td class="jour">28</td><td class="jour">29</td><td class="jour">30
            </td></tr><tr><td class="num_semaine">5</td><td class="jour">31</td></tr></tbody></table></div>
                </td><td><div class="calendrier"><table><tbody><tr><td></td><th colspan="8">février 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td class="num_semaine">5</td><td></td><td class="jour">1</td><td class="jour">2</td><td class="jour">3</td><td class="jour">4</td><td class="jour">5</td><td class="jour">6
            </td></tr><tr><td class="num_semaine">6</td><td class="jour">7</td><td class="jour">8</td><td class="jour">9</td><td class="jour">10</td><td class="jour">11</td><td class="jour">12</td><td class="jour">13
            </td></tr><tr><td class="num_semaine">7</td><td class="jour">14</td><td class="jour">15</td><td class="jour">16</td><td class="jour">17</td><td class="jour">18</td><td class="jour">19</td><td class="jour">20
            </td></tr><tr><td class="num_semaine">8</td><td class="jour">21</td><td class="jour">22</td><td class="jour">23</td><td class="jour">24</td><td class="jour">25</td><td class="jour">26</td><td class="jour">27
            </td></tr><tr><td class="num_semaine">9</td><td class="jour">28</td></tr></tbody></table></div>
                </td><td><div class="calendrier"><table><tbody><tr><td></td><th colspan="8">mars 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td class="num_semaine">9</td><td></td><td class="jour">1</td><td class="jour">2</td><td class="jour">3</td><td class="jour">4</td><td class="jour">5</td><td class="jour">6
            </td></tr><tr><td class="num_semaine">10</td><td class="jour">7</td><td class="jour">8</td><td class="jour">9</td><td class="jour">10</td><td class="jour">11</td><td class="jour">12</td><td class="jour">13
            </td></tr><tr><td class="num_semaine">11</td><td class="jour">14</td><td class="jour">15</td><td class="jour">16</td><td class="jour">17</td><td class="jour">18</td><td class="jour">19</td><td class="jour">20
            </td></tr><tr><td class="num_semaine">12</td><td class="jour">21</td><td class="jour">22</td><td class="jour">23</td><td class="jour">24</td><td class="jour">25</td><td class="jour">26</td><td class="jour">27
            </td></tr><tr><td class="num_semaine">13</td><td class="jour">28</td><td class="jour">29</td><td class="jour">30</td><td class="jour">31</td></tr></tbody></table></div>
                </td><td><div class="calendrier"><table><tbody><tr><td></td><th colspan="8">avril 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td class="num_semaine">13</td><td></td><td></td><td></td><td></td><td class="jour">1</td><td class="jour">2</td><td class="jour">3
            </td></tr><tr><td class="num_semaine">14</td><td class="jour">4</td><td class="jour">5</td><td class="jour">6</td><td class="jour">7</td><td class="jour">8</td><td class="jour">9</td><td class="jour">10
            </td></tr><tr><td class="num_semaine">15</td><td class="jour">11</td><td class="jour">12</td><td class="jour">13</td><td class="jour">14</td><td class="jour">15</td><td class="jour">16</td><td class="jour">17
            </td></tr><tr><td class="num_semaine">16</td><td class="jour">18</td><td class="jour">19</td><td class="jour">20</td><td class="jour">21</td><td class="jour">22</td><td class="jour">23</td><td class="jour">24
            </td></tr><tr><td class="num_semaine">17</td><td class="jour">25</td><td class="jour">26</td><td class="jour">27</td><td class="jour">28</td><td class="jour">29</td><td class="jour">30</td></tr></tbody></table></div>
                </td><td><div class="calendrier"><table><tbody><tr><td></td><th colspan="8">mai 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td class="num_semaine">17</td><td></td><td></td><td></td><td></td><td></td><td></td><td class="jour">1
            </td></tr><tr><td class="num_semaine">18</td><td class="jour">2</td><td class="jour">3</td><td class="jour">4</td><td class="jour">5</td><td class="jour">6</td><td class="jour">7</td><td class="jour">8
            </td></tr><tr><td class="num_semaine">19</td><td class="jour">9</td><td class="jour">10</td><td class="jour">11</td><td class="jour">12</td><td class="jour">13</td><td class="jour">14</td><td class="jour">15
            </td></tr><tr><td class="num_semaine">20</td><td class="jour">16</td><td class="jour">17</td><td class="jour">18</td><td class="jour">19</td><td class="jour">20</td><td class="jour">21</td><td class="jour">22
            </td></tr><tr><td class="num_semaine">21</td><td class="jour">23</td><td class="jour">24</td><td class="jour">25</td><td class="jour">26</td><td class="jour">27</td><td class="jour">28</td><td class="jour">29
            </td></tr><tr><td class="num_semaine">22</td><td class="jour">30</td><td class="jour">31</td></tr></tbody></table></div>
                </td><td><div class="calendrier"><table><tbody><tr><td></td><th colspan="8">juin 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td class="num_semaine">22</td><td></td><td></td><td class="jour">1</td><td class="jour">2</td><td class="jour">3</td><td class="jour">4</td><td class="jour">5
            </td></tr><tr><td class="num_semaine">23</td><td class="jour">6</td><td class="jour">7</td><td class="jour">8</td><td class="jour">9</td><td class="jour">10</td><td class="jour">11</td><td class="jour">12
            </td></tr><tr><td class="num_semaine">24</td><td class="jour">13</td><td class="jour">14</td><td class="jour">15</td><td class="jour">16</td><td class="jour">17</td><td class="jour">18</td><td class="jour">19
            </td></tr><tr><td class="num_semaine">25</td><td class="jour">20</td><td class="jour">21</td><td class="jour">22</td><td class="jour">23</td><td class="jour">24</td><td class="jour">25</td><td class="jour">26
            </td></tr><tr><td class="num_semaine">26</td><td class="jour">27</td><td class="jour">28</td><td class="jour">29</td><td class="">30</td></tr></tbody></table></div>
                </td><td><div class="calendrier"><table><tbody><tr><td></td><th colspan="8">juillet 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr><td class="num_semaine">26</td><td></td><td></td><td></td><td></td><td class="jour">1</td><td class="jour">2</td><td class="jour">3
            </td></tr><tr><td class="num_semaine">27</td><td class="jour">4</td><td class="jour">5</td><td class="jour">6</td><td class="jour">7</td><td class="jour">8</td><td class="jour">9</td><td class="jour">10
            </td></tr><tr><td class="num_semaine">28</td><td class="jour">11</td><td class="jour">12</td><td class="jour">13</td><td class="jour">14</td><td class="jour">15</td><td class="jour">16</td><td class="jour">17
            </td></tr><tr><td class="num_semaine">29</td><td class="jour">18</td><td class="jour">19</td><td class="jour">20</td><td class="jour">21</td><td class="jour">22</td><td class="jour">23</td><td class="jour">24
            </td></tr><tr><td class="num_semaine">30</td><td class="jour">25</td><td class="jour">26</td><td class="jour">27</td><td class="jour">28</td><td class="jour">29</td><td class="jour">30</td><td class="jour">31</td></tr></tbody></table></div>
                </td><td><div class="calendrier"><table><tbody><tr><td></td><th colspan="8">août 2022
            </th></tr><tr><td></td><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D
            </th></tr><tr><td class="num_semaine">31</td><td class="jour">1</td><td class="jour">2</td><td class="jour">3</td><td class="jour">4</td><td class="jour">5</td><td class="jour">6</td><td class="jour">7
            </td></tr><tr><td class="num_semaine">32</td><td class="jour">8</td><td class="jour">9</td><td class="jour">10</td><td class="jour">11</td><td class="jour">12</td><td class="jour">13</td><td class="jour">14
            </td></tr><tr><td class="num_semaine">33</td><td class="jour">15</td><td class="jour">16</td><td class="jour">17</td><td class="jour">18</td><td class="jour">19</td><td class="jour">20</td><td class="jour">21
            </td></tr><tr><td class="num_semaine">34</td><td class="jour">22</td><td class="jour">23</td><td class="jour">24</td><td class="jour">25</td><td class="jour">26</td><td class="jour">27</td><td class="jour">28
            </td></tr><tr><td class="num_semaine">35</td><td class="jour">29</td><td class="jour">30</td><td class="jour">31</td></tr></tbody></table></div>
            </td></tr></tbody></table>
          </div>
          <div className="profilEtud">
            <h2>
              Informations
            </h2>
            <FetchEtudiant />
          </div>
          <BoutonSemestre />
          </div>
        <FetchNote />
      </>
    );
  }
  
  export default Home;