import react from "react";
import Avatar from '@mui/material/Avatar';
import me from "../../images/me.jpg";
import '../../stylesheets/home.css';
// sx={{ width: 150, height: 150 }}
function Skills(){
    return (
        <div>
           <div className="container skills">
               <h1>My Skillset</h1>
               <div>
                   <div>
                    <Avatar src={me} style={{width:'150px',height:'150px'}}/>
                   </div>
                   <div>

                   </div>
                   <div>

                   </div>
               </div>
           </div>
        </div>
    );
}

export default Skills;
