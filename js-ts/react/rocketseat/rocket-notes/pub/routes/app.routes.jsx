import { Route, Routes } from "react-router-dom";

import { New } from '../pages/ne';
import { Details } from '../pages/de';
import { Home } from '../pages/ho';
import { Profile } from '../pages/po';

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
