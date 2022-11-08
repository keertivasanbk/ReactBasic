import Hello from "./component/hello";
import About from "./component/about";
import SingleComment from "./component/SingleComponents";
import elephant from  './image/elephant.jpg'; 
import UserCard from "./component/usercard";
import Try from './component/try';
import "./css/styling.css"

function App() {
  return (
    <div className="text-center">
          <h3>Welcome To My App!</h3>
            <UserCard>
                  <SingleComment name="jack" date="9:42"/>
            </UserCard>
            <UserCard>

                <SingleComment name="sara" text="this is react comments"/>
            </UserCard>
            <UserCard>

                  <SingleComment name="alex" pic={elephant}/>
            </UserCard>

            <Try name="deepak"/>
            

    </div>
  );
}

export default App;
