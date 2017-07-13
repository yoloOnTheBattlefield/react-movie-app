import React from 'react';
import { SideBar, Content } from './SideBar.styles';

export default ({ movie }) => {
  if(!movie){
    return null;
  }
  return (
    <SideBar>
      <Content>
        <h3>Genres</h3>
        <ul>
          {
            movie.genres ?
              movie.genres.map((genre) =>
                <li key={genre.id}>{genre.name}</li>
              )
              :
              null
          }
        </ul>
      </Content>
      <Content>
        <h3>Production Companies</h3>
        <ul>
          {
            movie.production_companies ?
              movie.production_companies.map((company) =>
                <li key={company.id}>{company.name}</li>
              )
              :
              null
          }
        </ul>
        <h3>Budget</h3>
        {
          movie.budget ?
            `${movie.budget} dollars`
            :
            'No information yet...'
        }
        <h3>Revenue</h3>
        {
          movie.revenue ?
            `${movie.revenue} dollars`
            :
            'No information yet...'
        }
      </Content>
      <Content>
        <h3>Spoken Languages</h3>
        <ul>
          {
            movie.spoken_languages ?
              movie.spoken_languages.map((language) =>
                <li key={language.iso_639_1}>{language.name}</li>
              )
              :
              'No information yet...'
          }
        </ul>
      </Content>
    </SideBar>
  )
}
