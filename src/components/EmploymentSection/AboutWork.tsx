interface AboutWorkProps {
  value: string;
  onChange: (value: string) => void;
}

export const AboutWork = ({ value, onChange }: AboutWorkProps) => {
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <h3 className="text-2xl text-mainText mb-2 font-medium">
        Описание анкета
      </h3>
      <textarea
        className="border-1 border-mainColor rounded-lg w-full text-xl text-subText p-3 mb-3.5 focus:outline-none focus:border-lightMainColor"
        rows={5}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
};
