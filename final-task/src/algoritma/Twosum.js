import React, { useState} from "react";

const HasilTwosum = () => {
         function getNilaiSum (arr, target) {
            var sums = [];
            for (var i = 0; i < arr.length; i++) { 
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i] + arr[j] === target) {
                        return ([i ,",", j]);
                    }
                }
            }
                return sums;
          }
        
        const Total = getNilaiSum([3, 5, 2, -4, 8, 11],19);
        console.log(Total);
        const [TwoSum] = useState(Total);
    return(
        <div>
            <section id="banner">
				<div className="inner">
                    <p>
                        Hasil dari [3, 5, 2, -4, 8, 11],19 adalah
                    </p>
                    <br/>
                {TwoSum}
				</div>
			</section>
            
        </div>
        
    );
}
export default HasilTwosum;