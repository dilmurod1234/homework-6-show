import React from "react"
import "./Assets/main.css"

class App extends React.Component{
  state = {
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653",
          },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications",
        },
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Samantha",
        email: "Julianne.OConner@kory.org",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653",
          },
        },
        phone: "493-170-9623 x156",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications",
        },
      },
    ],
    posts: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        userId: 2,
        id: 2,
        title: "voluptatem eligendi optio",
        body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
      },
      {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
      },
      {
        userId: 3,
        id: 3,
        title: "dolor sint quo a velit explicabo quia nam",
        body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
      },
      {
        userId: 4,
        id: 32,
        title: "doloremque illum aliquid sunt",
      },
    ],
    comments: [
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      },
      {
        postId: 2,
        id: 2,
        name: "eaque et deleniti atque tenetur ut quo ut",
        email: "Carmen_Keeling@caroline.name",
        body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
      },
      {
        postId: 3,
        id: 3,
        name: "debitis magnam hic odit aut ullam nostrum tenetur",
        email: "Maynard.Hodkiewicz@roberta.com",
        body: "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia",
      },
      {
        postId: 3,
        id: 12,
        name: "modi ut eos dolores illum nam dolor",
        email: "Oswald.Vandervort@leanne.org",
        body: "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit",
      },
      {
        postId: 4,
        id: 17,
        name: "eos est animi quis",
        email: "Preston_Hudson@blaise.tv",
        body: "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore",
      },
      {
        postId: 4,
        id: 20,
        name: "molestias expedita iste aliquid voluptates",
        email: "Mariana_Orn@preston.org",
        body: "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore",
      },
    ],
  }

  showPosts = (evt) => {
    this.setState({
      newPosts: this.state.posts.filter(item => item.userId === evt.target.id - 0),
      letPosts: true
    })
  }

  showComments = (evt) => {
    this.setState({
      newComments: this.state.comments.filter(item => item.postId === evt.target.id - 0),
      letComments: true
    })
  }
  
  render(){
    return(
        <div className="inner">
          <div className="users">
          <ul className="users__list">
           <h2 className="users__title">Users</h2>
           {this.state.users.map(item => (
            <li key={item.id} className="users__item">
             <div className="users__inner">
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <p>{item.phone}</p>
             </div>
            <button className="users__btn" id={item.id} onClick={this.showPosts}>show posts</button>
          </li>
        ))}
          </ul>
        </div>

        {this.state.letPosts ? (
          <div className="posts">
          <ul className="posts__list">
           <h2 className="posts__title">Posts</h2>
           {this.state.newPosts?.map(item => (
            <li key={item.id} className="posts__item">
             <div className="posts__inner">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
             </div>
            <button className="posts__btn" id={item.id} onClick={this.showComments}>show comments</button>
          </li>
        ))}
          </ul>
        </div>
        ) : (
          ""
        )}
        {this.state.letComments ? (
          <div className="comments">
          <ul className="comments__list">
           <h2 className="comments__title">Comments</h2>
           {this.state.newComments?.map(item => (
            <li key={item.id} className="comments__item">
             <div className="comments__inner">
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <p>{item.body}</p>
             </div>
          </li>
        ))}
          </ul>
        </div>
        ) : (
          ""
        )}
        </div>
      )
    }
  };
  
  export default App;
  