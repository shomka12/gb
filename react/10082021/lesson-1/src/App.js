import {Button} from "./components/Button";
import {CommentIcon, ShareIcon, LikeIcon} from "./components/Icons";
import {SocialList, SocialItem} from "./components/SocialList";
import {CardContent, CardFooter, CardBody} from "./components/Card";


function App() {
  return (
    <div className="App">
      <CardContent>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CardBody>
        <CardFooter>
          <SocialList>
            <SocialItem>
              <Button icon={<ShareIcon/>} label="Share"/>
            </SocialItem>
            <SocialItem>
              <Button icon={<CommentIcon/>} label="Comment"/>
            </SocialItem>
            <SocialItem>
              <Button icon={<LikeIcon/>} label="Like"/>
            </SocialItem>
          </SocialList>
        </CardFooter>
      </CardContent>


    </div>
  );
}

export default App;
