import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  data:any;

  constructor() { }

  ngOnInit(): void {
    this.getEpisodeData();
  }

  async getEpisodeData(){
    fetch('https://rickandmortyapi.com/api/episode').then(episodeResponse=>{
      if(episodeResponse.status != 200){
        this.data = {
          error:`API responded with ${episodeResponse.status}`
        }
      }else{
        episodeResponse.text().then(res=>{
          this.data = JSON.parse(res).results;
          this.data.forEach((episode:any)=>{
            episode.characters.forEach((character:any,i:any)=>{
              let characterData = this.getCharacterData(character);
              characterData.then(characterResponse=>{
                if(episodeResponse.status != 200){
                  episode.characters[i] = {
                    error:`API responded with ${episodeResponse.status}`
                  }
                }else{
                  characterResponse.text().then(data=>{
                    episode.characters[i] = JSON.parse(data);
                  })
                }
              })
            })
          })
      console.log(this.data)
        })
      }
    }).catch(error=>{
      this.data = {
        error:'error'
      }
    })
  }

  getCharacterData(character:any){
    return fetch(character)
  }

}
