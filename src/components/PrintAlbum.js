import React from 'react'

function PrintAlbum ({ albums }) {
  return(
    <ul>
      { albums && albums.albums && albums.albums.map((value, index) => (
          <li key = { index }> 
            UserId : {value.userId}<br/>
            id : {value.id}<br/>
            title : {value.title}
          </li>  
        ))
      }
    </ul>
  );
};

export default PrintAlbum;