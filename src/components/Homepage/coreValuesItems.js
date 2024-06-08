import React from 'react';

export default function CoreValuesItems({title, article}){

return( 
          <div className="about-us-content">
            <h4 className="core-values-titles">{title}</h4>
            <article>
              {article}
          </article>
          </div>
)

}