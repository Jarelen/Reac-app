export default function Pelis(){
const MyStyle={
    color: "#000000",
    textAlign: "left", 
    fontWeight: 100,
    letterSpacing: "1px",
    position: "relative",
    fontSize: "18px", // 
   }
    
    return (
    
        <main className="Pelis" style={MyStyle}>
            <img src="https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe0k0-UurHVbx9fm2hTVfoTVYElSw7GWMcvc1JAfGPsqraunVJBWewzMWxs8GmB4an5YQM1BPv3Y37wubHYKAJZ50hBn0oEfpX-m.jpg?r=ada" alt="1°" style={{ maxHeight: "400px", width: "auto", alignContent:"center"}}  ></img>
            <div > Lalaland es una pelicula para la gente enamorada o que alguna vez lo ha estado, la música te va llevando a través de la historia de Mía y Sebastian, dos jóvenes almas creativas que deben decidir, avanzar y dejar ir</div>
            <div><a href="https://www.filmaffinity.com/mx/userlist.php?user_id=7844963&list_id=100&orderby=0&v=list">Da click aquí para ver mi lista en Filmaffinity</a>
                        <ol> <p> <span style={{ textDecoration: "underline" }}> Mis películas favoritas son: </span></p>
                            <li>Lalaland</li>
                            <li>Lego Movie</li>
                            <li>The Little Mermaid</li>
                            <li>Inception</li>
                            <li>Encanto</li>
                        </ol>
                        </div>
        </main>
    )}