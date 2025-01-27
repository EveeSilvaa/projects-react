import { useState } from "react";
import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";



function App() {
  const { user, setUser} = useState('');
  const { CurrentUser, setCurrentUser} = useState(null);
  const { repos, setRepos} = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}`);
      const newRepos = await reposData.json();

      if(newRepos.length){
         setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" 
            value={user} 
            onChange={(event) => setUser(event.target.value)} 
            placeholder="@username" />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {CurrentUser?.name ? (
            <>
            <div className="perfil">
            <img src={CurrentUser.avatar_url} 
            className="profile" alt="image de perfil" />
          </div>
          <div>
            <h3>{CurrentUser.name}</h3>
            <span>{CurrentUser.login}</span>
            <p>{CurrentUser.bio}</p>
          </div>
          <hr />
          </>
          ): null}
          {repos?.length ? (
          <div>
            <h4 className="repositorio">Repositórios</h4>
            {repos.map((repo) => (
              <ItemList title={repo.name} description={repo.description} />
            ))}
          </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;