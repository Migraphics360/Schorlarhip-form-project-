let fname = document.getElementById("fname")
let fnameError = document.getElementById("fnameError")
let lname = document.getElementById("lname")
let lnameError = document.getElementById("lnameError")
let gender = document.getElementById("gender")
let genderError = document.getElementById("genderError")
let phoneNum = document.getElementById("phoneNum")
let phoneNumError = document.getElementById("phoneNumError")
let age = document.getElementById("age")
let ageError = document.getElementById("ageError")
let continent = document.getElementById("continent")
let continentError = document.getElementById("continentError")
let africa = document.getElementById("africa")
let countryError = document.getElementById("countryError")
let asia = document.getElementById("asia")
let northAmerica = document.getElementById("northAmerica")
let southAmerica = document.getElementById("southAmerica")
let otherCountries = document.getElementById("otherCountries")
let maths = document.getElementById("maths")
let mathsError = document.getElementById("mathsError")
let english = document.getElementById("english")
let englishError = document.getElementById("englishError")
let chemistry = document.getElementById("chemistry")
let chemistryError = document.getElementById("chemistryError")
let geography = document.getElementById("geography")
let geographyError = document.getElementById("geographyError")
let physics = document.getElementById("physics")
let physicsError = document.getElementById("physicsError")
let economics = document.getElementById("economics")
let economicsError = document.getElementById("economicsError")
let agric = document.getElementById("agric")
let agricError = document.getElementById("agricError")
let biology = document.getElementById("biology")
let biologyError = document.getElementById("biologyError")
let mathScores = document.getElementById("mathScores")
let engScore = document.getElementById("engScore")
let chemScore = document.getElementById("chemScore")
let chemScoreError = document.getElementById("chemScoreError")
let phyScore = document.getElementById("phyScore")
let phyScoreError = document.getElementById("phyScoreError")
let ecoScore = document.getElementById("ecoScore")
let ecoScoreError = document.getElementById("ecoScoreError")
let geoScore = document.getElementById("geoScore")
let geoScoreError = document.getElementById("geoScoreError")
let agricScore = document.getElementById("agricScore")
let agricScoreError = document.getElementById("agricScoreError")
let bioScore = document.getElementById("bioScore")
let bioScoreError = document.getElementById("bioScoreError")
let button = document.getElementById("button")
let todayDate
let dob
let old
let agePoint
let contPoints
let averagePoint
let overallScore
let overallPoint = 180
let dispAge = document.getElementById("dispAge")
let totalSubScrText = document.getElementById("totalSubScrText")
let average = document.getElementById("average")
let subjectsPoint = document.getElementById("subjectsPoint")
let agePointsDisp = document.getElementById("agePointsDisp")
let overallMark = document.getElementById("overallMark")


button.addEventListener("click", function () {
    validate()

})
function validate() {

    if (fname.value == "" || fname.value == null) {
        fnameError.innerHTML = "field required"
    } else {
        fnameError.innerHTML = ""
    }
    if (lname.value == "" || lname.value == null) {
        lnameError.innerHTML = "field required"
    } else {
        lnameError.innerHTML = ""
    }
    if (gender.value == "" || gender.value == null) {
        genderError.innerHTML = "field required"
    } else {
        genderError.innerHTML = ""
    }
    if (phoneNum.value == "" || phoneNum.value == null) {
        phoneNumError.innerHTML = "field required"
    } else if (phoneNum.value.length != 11) {
        phoneNumError.innerHTML = "11 digits riquired"

    } else {
        phoneNumError.innerHTML = ""
    }
    if (age.value == "" || age.value == null) {
        ageError.innerHTML = "field required"
    } else if (age.value != "" || age.value != null) {
        todayDate = new Date().getFullYear()
        dob = new Date(age.value).getFullYear()
        old = todayDate - dob
        dispAge.innerHTML = " Your Age is " + old + " years old"
        ageError.innerHTML = ""
    }
    if (old <= 24) {
        agePoint = 100
        agePointsDisp.innerHTML = agePoint
    } else if (old <= 30) {
        agePoint = 80
        agePointsDisp.innerHTML = agePoint

    } else if (old <= 35) {
        agePoint = 50
        agePointsDisp.innerHTML = agePoint

    } else if (old <= 40) {
        agePoint = 30
        agePointsDisp.innerHTML = agePoint

    } else if (old >= 41) {
        agePoint = 10
        agePointsDisp.innerHTML = agePoint

    } else {
        agePoint = 0
        agePointsDisp.innerHTML = agePoint
    }

    if (continent.value == "" || continent.value == null) {
        continentError.innerHTML = "field required"
    } else {
        continentError.innerHTML = ""
    }
    if (chemistry.value == "" || chemistry.value == null) {
        chemistryError.innerHTML = "field required"
    } else {
        chemistryError.innerHTML = ""
    }
    if (geography.value == "" || geography.value == null) {
        geographyError.innerHTML = "field required"
    } else {
        geographyError.innerHTML = ""
    }
    if (physics.value == "" || physics.value == null) {
        physicsError.innerHTML = "field required"
    } else {
        physicsError.innerHTML = ""
    }
    if (economics.value == "" || economics.value == null) {
        economicsError.innerHTML = "field required"
    } else {
        economicsError.innerHTML = ""
    }
    if (agric.value == "" || agric.value == null) {
        agricError.innerHTML = "field required"
    } else {
        agricError.innerHTML = ""
    }
    if (biology.value == "" || biology.value == null) {
        biologyError.innerHTML = "field required"
    } else {
        biologyError.innerHTML = ""
    }
    if (chemScore.value == "" || chemScore.value == null) {
        chemScoreError.innerHTML = "field required"
    } else {
        chemScoreError.innerHTML = ""
    }
    if (phyScore.value == "" || phyScore.value == null) {
        phyScoreError.innerHTML = "field required"
    } else {
        phyScoreError.innerHTML = ""
    }
    if (ecoScore.value == "" || ecoScore.value == null) {
        ecoScoreError.innerHTML = "field required"
    } else {
        ecoScoreError.innerHTML = ""
    }
    if (geoScore.value == "" || geoScore.value == null) {
        geoScoreError.innerHTML = "field required"
    } else {
        geoScoreError.innerHTML = ""
    }
    if (agricScore.value == "" || agricScore.value == null) {
        agricScoreError.innerHTML = "field required"
    } else {
        agricScoreError.innerHTML = ""
    }
    if (bioScore.value == "" || bioScore.value == null) {
        bioScoreError.innerHTML = "field required"
    } else {
        bioScoreError.innerHTML = ""
    }
    if (chemScore.value != "" && phyScore.value != "" && ecoScore.value != "" && geoScore.value != "" && agricScore.value != "" && bioScore.value != "" && mathScores.value != "" && engScore.value != "") {

        totalSubScore()
    }
}
function totalSubScore() {
    let totalSubjectScore
    let averageScore

    totalSubjectScore = parseInt(chemScore.value) + parseInt(phyScore.value) + parseInt(ecoScore.value) + parseInt(geoScore.value) + parseInt(agricScore.value) + parseInt(bioScore.value) + parseInt(mathScores.value) + parseInt(engScore.value)

    totalSubScrText.innerHTML = "Total Subject Score = " + totalSubjectScore
    averageScore = totalSubjectScore / 8
    average.innerHTML = "Average Score = " + averageScore

    if (averageScore >= 90) {
        averagePoint = 150
        subjectsPoint.innerHTML = averagePoint

    } else if (averageScore >= 85) {
        averagePoint = 140
        subjectsPoint.innerHTML = averagePoint

    } else if (averageScore >= 75) {
        averagePoint = 120
        subjectsPoint.innerHTML = averagePoint

    } else if (averageScore >= 65) {
        averagePoint = 100
        subjectsPoint.innerHTML = averagePoint

    } else if (averageScore >= 60) {
        averagePoint = 80
        subjectsPoint.innerHTML = averagePoint

    } else if (averageScore >= 50) {
        averagePoint = 50
        subjectsPoint.innerHTML = averagePoint

    } else if (averageScore >= 40) {
        averagePoint = 20
        subjectsPoint.innerHTML = averagePoint

    } else {
        averagePoint = 0
        subjectsPoint.innerHTML = averagePoint

    }
    overallScore = agePoint + contPoints + averagePoint
    if (overallScore >= overallPoint) {
        overallMark.innerHTML = "Congratulations! " +fname.value + " your overall point is "
            + overallScore + " therefore you are eligible for schorlaship "
            chart()
    } else {
        overallMark.innerHTML = " Declined! sorry" +fname.value + " your overall point is "
            + overallScore + " and not upto required "

    }
}


function chart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myPopChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Age Point', 'Country Point', 'Grade Point'],
            datasets: [{
                label: '# of Points',
                data: [agePoint, contPoints, averagePoint],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}






continent.addEventListener("change", function () {

    if (continent.value == "africa") {
        africa.style.display = "block"
        asia.style.display = "none"
        northAmerica.style.display = "none"
        southAmerica.style.display = "none"
        otherCountries.style.display = "none"
        contPoints = 50


    } else if (continent.value == "asia") {
        africa.style.display = "none"
        asia.style.display = "block"
        northAmerica.style.display = "none"
        southAmerica.style.display = "none"
        otherCountries.style.display = "none"
        contPoints = 40

    } else if (continent.value == "northAmerica") {
        africa.style.display = "none"
        asia.style.display = "none"
        northAmerica.style.display = "block"
        southAmerica.style.display = "none"
        otherCountries.style.display = "none"
        contPoints = 20
    }
    else if (continent.value == "southAmerica") {
        africa.style.display = "none"
        asia.style.display = "none"
        northAmerica.style.display = "none"
        southAmerica.style.display = "block"
        otherCountries.style.display = "none"
        contPoints = 30
    } else {
        africa.style.display = "none"
        asia.style.display = "none"
        northAmerica.style.display = "none"
        southAmerica.style.display = "none"
        otherCountries.style.display = "block"
        contPoints = 10

    }
    console.log(contPoints)


})

