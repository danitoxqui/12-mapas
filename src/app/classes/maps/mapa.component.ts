

lat=51.678418;
lng=7.809007;

constructor(){
  if()
}
ngOnInit{

}
agregarMarcador(evento){
  this.marcadores=JSON.parse(localStorage.getItem('marcadores'));


}
borrarMarcador(i:number){
  this.marcadores.splice(i,1)
}
