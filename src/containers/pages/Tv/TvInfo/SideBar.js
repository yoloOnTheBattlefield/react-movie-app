import React from 'react';
import { SideBar, Content } from './SideBar.styles';

export default ({ tv }) => {
  if(!tv){
    return null;
  }
  return (
    <SideBar>
      <Content>
        <h3>Genres</h3>
        <ul>
          {
            tv.genres ?
              tv.genres.map((genre) =>
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
            tv.production_companies ?
              tv.production_companies.map((company) =>
                <li key={company.id}>{company.name}</li>
              )
              :
              null
          }
        </ul>
        <h3>Created By</h3>
        <ul>
          {
            tv.created_by ?
              tv.created_by.map((creators) =>
                <li key={creators.id}>{creators.name}</li>
              )
              :
              null
          }
        </ul>
        <h3>Seasons</h3>
        <ul>
          {
            tv.seasons ?
              tv.seasons.map((season) =>
              <li key={season.id}>{season.air_date} -Episodes {season.episode_count}</li>
            )
              :
              null
          }
        </ul>
      </Content>
      <Content>
        <h3>Networks</h3>
        <ul>
          {
            tv.networks ?
              tv.networks.map((network) =>
                <li key={network.id}>{network.name}</li>
              )
              :
              null
          }
        </ul>
      </Content>
    </SideBar>
  )
}
