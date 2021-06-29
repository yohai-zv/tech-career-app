import styled from "styled-components"
import { useState, useEffect } from "react"


const PhotoSliders = ["/TechTwoPhoto.jpg", "Tech-C.jpg"]

const Home = () => {
    const [PhotoSlidersPlay, SetPhotoSliderPlay] = useState(0)
    const [NumberTopCard, setNumberTopCard] = useState("-22000px")
    const [CardCourse, setCardCourse] = useState([])
    let result;
    let ArrayCours =
        [{ id: 1, nameCurses: " FullStack Development - פיתוח תוכנה", information: "הצורך בשטח לאנשי עמיקה בעקרונות", urlPhoto: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" },
        { id: 2, nameCurses: "אוטומציה + QA בדיקות תוכנה ידני", information: "הצורך בשטח לאנשי עמיקה בעקרונות", urlPhoto: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHRlY2h8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 3, nameCurses: "CISCO DEVNET ניהול תקשורת", information: "הצורך בשטח לאנשי עמיקה בעקרונות", urlPhoto: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhpZ2glMjB0ZWNofGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 4, nameCurses: "DATA SCIENCE לאקדמאים טכנולוגיים", information: "הצורך בשטח לאנשי עמיקה בעקרונות", urlPhoto: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhpZ2glMjB0ZWNofGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 5, nameCurses: "לאקדמאים כללי DATA ANALYSIS", information: "הצורך בשטח לאנשי עמיקה בעקרונות", urlPhoto: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhpZ2glMjB0ZWNofGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 6, nameCurses: "לבעלי רקע ב -IT -SECURITY INCIDENT RESPONSEE", information: "הצורך בשטח לאנשי עמיקה בעקר", urlPhoto: "https://images.unsplash.com/photo-1606765962197-9cf685904162?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhpZ2glMjB0ZWNofGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }]
    const Header = styled.div`
    width:50vw;
    background-image: url(${PhotoSliders[PhotoSlidersPlay]});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 59vh;
    margin-left: 50px;
    `
    const ContentDiv = styled.div`
    width: 40vw;
    height: 59vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    direction: rtl;
    padding-right:50px;
    `
    useEffect(() => {
        setInterval(() => {
            SetPhotoSliderPlay((play) => { return play + 1 })
        }, 3000);
    }, [])
    const Play = () => {
        if (PhotoSlidersPlay === PhotoSliders.length) {
            SetPhotoSliderPlay(0)
        }
    }
    Play()
    const Title = styled.h1`
    text-align:center;
    color:#f1f1f8;
`
    const ThemeImageForTheSite = styled.div`
    width: auto;
    height: 81vh;
    background-image: url("https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2020/09/29020725/hire-stellar-developer.jpg");
    background-repeat: round; 

`
    const DivWraps = styled.div`
    width: 26%;
    height: 366px;
    background-color: #3f7d789e;
    border-radius: 8%;
    margin: 10px 0;
    box-shadow: -4px 5px 20px 0px black;
    `
    const DivWrapsTwo = styled.div`
     width: 100%;
    height: 46%;
    background-image: url(${props => props.imgUrl});
    background-repeat: round;
    border-radius: 8%;
    `

    const DivWrapsThree = styled.div`
    /* background-color: #dcdcdc; */
    width: 25%;
    height: 20%;
    margin-top:38px; 
    border-radius: 9%;
    `
    const Text = styled.p`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #000000;
    width:400%;
    text-align: center;
    `
    const ThemeImageForTheTab = styled.div`
    width: 100vw;
    height: 107vh;
    margin-top: ${NumberTopCard};
    transition: all 2s;
    background-image: url("https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    z-index: 221;
    /* opacity: 0.5; */
    `
    function ShowWindowCard(id) {
        result = ArrayCours.find(element => id === element.id)
        // const [CardCourse, setCardCourse] = useState()
        setCardCourse(result)
        console.log(CardCourse);
        if (NumberTopCard === "-22000px") {
            setNumberTopCard("-800px")
        } else if (NumberTopCard === "-800px") {
            setNumberTopCard("-22000px")
        }
    }
function CloseWindowCard(){
    if (NumberTopCard === "-22000px") {
        setNumberTopCard("-800px")
    } else if (NumberTopCard === "-800px") {
        setNumberTopCard("-22000px")
    }
}
    return (<>
        <ThemeImageForTheSite>
            <Title>Welcome To Tech-Carer </Title>
            <div style={{ maxWidth: " 1300px", margin: "0 auto" }}>
                <div style={{ width: "97%", display: "flex", justifyContent: "space-between", color: "white", backgroundColor: " #00000082", opacity: 0.9 }} >  <Header /> <ContentDiv>
                    <h1>טק קריירה</h1>
                    <p>"טק-קריירה" הוא ארגון המסייע לצעירים וצעירות יוצאי אתיופיה לרכוש קריירה בעולם ההייטק. הארגון מציע תכנית ייחודית, הכוללת הכשרה טכנולוגית, סדנאות העשרה ופיתוח אישי ושירותי השמה. משתתפי התכנית רוכשים ידע, ניסיון וכישורים הדרושים על מנת להשתלב בתעשיית ההייטק ולפתח עצמאות כלכלית.
                        הסטודנטים ב"טק-קריירה", הלומדים מקצועות טכנולוגיים שונים בתנאי פנימייה, מקבלים מלגות מחייה ונהנים מגישה למעבדות מחשבים חדישות. במקביל, הם עוברים מערך העשרה, פיתוח אישי והכנה לקריירה וזוכים לליווי אישי ומקצועי מצד מנהלים מתעשיית ההייטק.
                        מסלולי ההכשרה הטכנולוגית של טק-קריירה מוכרים על ידי משרד העבודה והרווחה ונבחרים בהתאם לדרישות תעשיית ההייטק וה-IT בישראל. הם מתקיימים בשותפות עם חברות עסקיות מובילות בתחומן.</p>
                </ContentDiv> </div>
            </div>
        </ThemeImageForTheSite>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "right" }}>:הקורסים שלנו </h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {
                    ArrayCours.map(element => {
                        return (
                            <DivWraps>
                                <DivWrapsTwo imgUrl={element.urlPhoto} />
                                <h3 style={{ textAlign: "center" }}>{element.nameCurses}</h3>
                                <DivWrapsThree>
                                    <Text>
                                        {/* {element.information} */}
                                        <button onClick={() => { ShowWindowCard(element.id) }} >Show</button>
                                    </Text>
                                </DivWrapsThree>
                            </DivWraps>
                        )
                    })
                }
                <ThemeImageForTheTab >
                    <button onClick={ CloseWindowCard} >Close</button>
                    <div style={{display:"flex",justifyContent:"center" }}>
                        <DivWraps>
                            <DivWrapsTwo imgUrl={CardCourse.urlPhoto} />
                            <h3 style={{ textAlign: "center" }}>{CardCourse.nameCurses}</h3>
                            <DivWrapsThree>
                                <Text>
                                    {CardCourse.information}
                                </Text>
                            </DivWrapsThree>
                        </DivWraps>
                    </div>
                </ThemeImageForTheTab>
            </div>
        </div>
    </>)
}
export default Home