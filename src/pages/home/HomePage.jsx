import CoursesIcons from '../../componants/coursesIcons/CoursesIcons'
import FeatureList from '../../componants/features/FeatureList'
import CoursesSection from '../../componants/coursecard/CoursesSection'
import "./HomePage.css"
import Footer from '../../componants/footer/Footer'


function HomePage() {
   return (
      <>
         <CoursesIcons />
         <FeatureList/>
         <CoursesSection />
         <Footer />
      </>
   )
}

export default HomePage