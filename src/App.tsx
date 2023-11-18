import GlobalStyle from "./components/global-style/global-style";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

function App() {
  return (
    <GlobalStyle>
      
        <RouterProvider router={router} />
    </GlobalStyle>
  );
}

export default App;
