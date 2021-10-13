import './App.css';
import Profile from  './profile/Component';
import MyImage from './Developpeur.jpg';
function App(){
  const handleName=name => alert(name);
  const styleObject={ textAlign:'center'}
 return(
  <div style={styleObject}>
    <Profile fullName="Gregory deprez" bio=" Microsoft Dynamics Navision Developer with  more then 8 year of experience" profession="Microsot Dynamics Navision Developer" handleName={handleName}>
    <img src={MyImage} alt="profilepic"/></Profile>   
  </div>

  );
}
export default App;
