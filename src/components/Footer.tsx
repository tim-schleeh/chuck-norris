// Footer

import VisitorCount from './VisitorCount';

export default async function Footer() {
  return (
    <footer className=" text-center p-4">
      <hr className="pb-4" />
      <VisitorCount />
    </footer>
  );
}
