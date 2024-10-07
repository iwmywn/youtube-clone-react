export default function Footer() {
  return (
    <footer className="text-[13px]">
      <div className="flex flex-wrap gap-x-2 px-6 pt-4 font-medium">
        <a href="#">About</a>
        <a href="#">Press</a>
        <a href="#">Copyright</a>
        <a href="#">Contact us</a>
        <a href="#">Creators</a>
        <a href="#">Advertise</a>
        <a href="#">Developers</a>
      </div>
      <div className="flex flex-wrap gap-x-2 px-6 pt-3 font-medium">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Policy & Safety</a>
        <a href="#">How Youtube works</a>
        <a href="#">Test new features</a>
      </div>
      <div className="px-6 py-4 text-xs text-secondary/50">
        &copy; 2024 Google LLC
      </div>
    </footer>
  );
}
