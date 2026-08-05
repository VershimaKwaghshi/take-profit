"use client";

type Props = {
  value?: string[];
  onChange: (value: string[]) => void;
};

const assets = ["Forex", "Crypto", "Stocks", "Futures", "CFDs"];

export default function AssetSelector({ value = [], onChange }: Props) {
  function toggleAsset(asset: string) {
    if (value.includes(asset)) {
      onChange(value.filter((item) => item !== asset));
    } else {
      onChange([...value, asset]);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-base text-ash">What do you trade? (Optional)</p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {assets.map((asset) => {
          const active = value.includes(asset);

          return (
            <label
              key={asset}
              className={`flex cursor-pointer items-center justify-center rounded-md border px-4 py-4 text-sm font-medium transition ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-ink hover:border-ink"
              }`}
            >
              <input
                type="checkbox"
                checked={active}
                onChange={() => toggleAsset(asset)}
                className="sr-only"
              />
              {asset}
            </label>
          );
        })}
      </div>
    </div>
  );
}