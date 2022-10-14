import "./AvailableServices.css";
import AvailableServicesCard from "./AvailableServicesCard";
import image1 from "../../assests/sweepers.webp";
const AvailableServices=()=>{
    const cards = [
        {
          id: 1,
          title: "Sweepers",
          image: image1,
          text:"To motivate the new students coming to the club, we have organized a faculty interaction session. The main motive of this session is to encourage the students of the club to explore new ideas and to bring out the zeal inside them. All the recruited members got familiar with Innovation Center head Sachin Rathore sir as well as our faculty coordinators and mentors Sushil Kumar sir and Harsh Khatter sir."
        },
        {
          id: 2,
          title: "Plumbers",
          image: image1,
          text:"Training period- 01/05/2022-30/06/2022 \n\n Felicitation- 06/09/2022 \n\n Under this summer training program, Mycin had provided 30 hours training completely focused and dedicated to all Machine Learning Algorithms. The main aim of this program was to give a brief introduction of Artificial Intelligence, Data Science, and Machine Learning and also to provide hands-on training on well-known machine learning algorithms. This training session was attended by approx. 30 machine learning enthusiasts both from first and second year. Sessions were organized and taught by some of the best brains from our club that includes – Archit Srivastava, Kushagra Srivastava and Aniket Bhardwaj. With a view to judge the skills learnt by the trainees, at last the enthusiasts were divided into teams and each team was assigned with a mentor and a project based on basic machine learning algos.The training was successfully ended with felicitation program "
          
        },
        {
          id: 3,
          title: "ELectrician",
          image: image1,
          text:"On 11th July Department Of Defence Production and Ministry of Defence, Government of India organized an event AiDef(artificial intelligence in Defence) at plenary hall of Vigyaan Bhawan, New Delhi to showcase India's incorporation of AI in its Defence sector. The innovation center and MYCIN club organized a visit to the event to inspire students."
          
        },
      ];
    
    return (
        <div className="Available_container ">
        <h3 className="Available_Title">Services</h3>
        <div className="Available_row">
          {cards.map(({ title, image, text,id }) => (
            <div className="Available_col" key={id}>
             
              <AvailableServicesCard imageSource={image} title={title} text={text} />
            </div>
          ))}
        </div>
      </div>
    );
}
export default AvailableServices;