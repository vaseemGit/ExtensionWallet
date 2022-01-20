import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter,
  Routes,
  Redirect,
} from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Offer from './components/Offers/Offer';
import PopularCategories from './components/PopularCategories/PopularCategories';
import MakeOffer from './components/MakeOffer/MakeOffer';
import MakeCounterOffer from './components/MakeCounterOffer/MakeCounterOffer';
import RejectOffer from './components/RejectOffer/RejectOffer';
import AcceptOffer from './components/AcceptOffer/AcceptOffer';
import RecentExperience from './components/RecentExperiences/RecentExperience';
import DocuSign from './components/DocuSign/DocuSign';

function App() {

  return (
    <DndProvider backend={HTML5Backend}>

      <Router>
        <Routes className="">
          <Route exact path="/acceptoffer" element={<AcceptOffer />} />
          <Route exact path="/rejectoffer" element={<RejectOffer />} />
          <Route exact path="/makecounteroffer" element={<MakeCounterOffer />} />
          <Route exact path="/makeoffer" element={<MakeOffer />} />
          <Route exact path="/popularcategories" element={<PopularCategories />} />
          <Route exact path="/recentexperience" element={<RecentExperience />} />
          <Route exact path="/docusign" element={<DocuSign />} />
          <Route exact path="/" element={<Offer />} />
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
