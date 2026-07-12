"use client";

type Props = {
  value?: string[];
  onChange: (value: string[]) => void;
};

const assets = [
  "Forex",
  "Crypto",
  "Stocks",
  "Futures",
  "CFDs",
];

export default function AssetSelector({
  value = [],
  onChange,
}: Props) {
  function toggleAsset(asset: string) {
    if (value.includes(asset)) {
      onChange(
        value.filter((item) => item !== asset)
      );
    } else {
      onChange([
        ...value,
        asset,
      ]);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-lg text-black">
        What do you trade? (Optional)
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {assets.map((asset) => (
          <label
            key={asset}
            className="flex items-center gap-3 rounded-2xl border border-neutral-300 bg-white px-5 py-4 text-black cursor-pointer"
          >
            <input
              type="checkbox"
              checked={value.includes(asset)}
              onChange={() =>
                toggleAsset(asset)
              }
              className="w-5 h-5"
            />

            {asset}
          </label>
        ))}
      </div>
    </div>
  );
}