export const Avatar = ({ src }: { src: string }) => (
  <div className="min-w-[50px]">
    <img
      src={src}
      className="w-[50px] h-[50px] rounded-full bg-pink-300"
    />
  </div>
);
