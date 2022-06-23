import React from "react";
import styles from "./Grid.module.css"
import GridItem  from "./GridItem";

export default class App extends React.Component {
    renderFacts() {
        return this.props.facts.map(item => 
            <GridItem key={item.id}
            fact={item}/>
            );
    }
    render(){
        return(
            <div className={styles.grid}>
        {this.renderFacts()}
    </div>
        )
    }
       

}

   

