export const useGPAcalculation = () => {

  const calculateGPA = async() => {
    const response = await fetch("http://localhost:4000/api/subjects/getAllSubjects")
      const json = await response.json()

      if(response.ok){
        var sumOfCreditxGrade = 0;
        var sumOfCredits = 0;

        for(var i=0 ; i<json.length ; i++){
          //console.log((Number(json[i].credit)) * Number(json[i].grade));
          sumOfCredits += Number(json[i].credit);
          sumOfCreditxGrade += (Number(json[i].credit)) * Number(json[i].grade)
        }
        console.log(sumOfCreditxGrade);
        console.log(sumOfCredits);
        return ((sumOfCreditxGrade / sumOfCredits).toFixed(2));
      }
  }

  return {calculateGPA}
}