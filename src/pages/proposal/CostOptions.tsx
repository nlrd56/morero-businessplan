import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const title = "Cost Options";
export const lastUpdated = new Date().toLocaleDateString();

export default function CostOptions() {
  const [selectedOption, setSelectedOption] = useState<"option1" | "option2">("option2");
  const [standardDays, setStandardDays] = useState<number>(3);
  const [weekendNights, setWeekendNights] = useState<number>(0);
  const [mileage, setMileage] = useState<number>(0);

  const baseRate = selectedOption === "option1" ? 650 : 475;
  const weekendNightMultiplier = 1.5;
  const mileageRate = 0.45;

  const calculateCost = () => {
    // Weekly costs
    const weeklyStandardCost = standardDays * baseRate;
    const weeklyWeekendNightCost = (weekendNights / 4) * baseRate * weekendNightMultiplier;
    const weeklyMileageCost = (mileage / 4) * mileageRate;
    const weeklySubtotal = weeklyStandardCost + weeklyWeekendNightCost + weeklyMileageCost;
    const weeklyVat = weeklySubtotal * 0.2;
    const weeklyTotal = weeklySubtotal + weeklyVat;
    
    // Monthly costs (4 weeks)
    const monthlyStandardCost = standardDays * baseRate * 4;
    const monthlyWeekendNightCost = weekendNights * baseRate * weekendNightMultiplier;
    const monthlyMileageCost = mileage * mileageRate;
    const monthlySubtotal = monthlyStandardCost + monthlyWeekendNightCost + monthlyMileageCost;
    const monthlyVat = monthlySubtotal * 0.2;
    const monthlyTotal = monthlySubtotal + monthlyVat;
    
    // Annual costs (52 weeks)
    const annualStandardCost = standardDays * baseRate * 52;
    const annualWeekendNightCost = weekendNights * baseRate * weekendNightMultiplier * 12;
    const annualMileageCost = mileage * mileageRate * 12;
    const annualSubtotal = annualStandardCost + annualWeekendNightCost + annualMileageCost;
    const annualVat = annualSubtotal * 0.2;
    const annualTotal = annualSubtotal + annualVat;
    
    return {
      weekly: {
        subtotal: weeklySubtotal,
        vat: weeklyVat,
        total: weeklyTotal,
      },
      monthly: {
        subtotal: monthlySubtotal,
        vat: monthlyVat,
        total: monthlyTotal,
      },
      annual: {
        subtotal: annualSubtotal,
        vat: annualVat,
        total: annualTotal,
      },
    };
  };

  const costs = calculateCost();

  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Cost Options</h2>
      <p className="mb-6">
        Pricing and payment options for the proposal. All rates are for consulting time.
      </p>

      {/* Pricing Options */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Option 1 */}
        <Card className="border-white/20 bg-gray-900/30">
          <CardHeader>
            <CardTitle className="text-gray-300">Option 1: Fixed Rate</CardTitle>
            <CardDescription className="text-gray-400">
              Simple, predictable pricing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">£650</div>
              <div className="text-gray-300">per day</div>
            </div>
          </CardContent>
        </Card>

        {/* Option 2 - Preferred */}
        <Card className="border-orange-400 bg-gray-900/30 relative">
          <div className="absolute top-4 right-4 bg-orange-400 text-gray-900 px-3 py-1 rounded text-xs font-semibold">
            PREFERRED
          </div>
          <CardHeader>
            <CardTitle className="text-gray-300">Option 2: Base + Performance Bonus</CardTitle>
            <CardDescription className="text-gray-400">
              Aligned with growth and delivery targets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">£475</div>
              <div className="text-gray-300">per day + performance-linked bonus</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rates Table and Calculator Side by Side */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Rates Table */}
        <div>
          <h3 className="content-title text-lg mb-4">Rates</h3>
          <div className="border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Item</div>
              <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2 text-center">Rate/Multiplier</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-center">Option 1</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 text-center">Option 2</div>
            </div>

            {/* Rows */}
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-3 break-words whitespace-normal">Standard Day Rate</div>
              <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">1.0x</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">£650</div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">£475</div>
            </div>
            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-3 break-words whitespace-normal">Weekend / Night Work</div>
              <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">1.5x</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">£975</div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">£712.50</div>
            </div>
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-3 break-words whitespace-normal">Mileage to Site</div>
              <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">1.0x</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">£0.45/mile</div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">£0.45/mile</div>
            </div>
            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-3 break-words whitespace-normal">Software</div>
              <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-3 text-center break-words whitespace-normal">1.0x</div>
              <div className="flex-[0_0_50%] border-b border-white/20 px-4 py-3 break-words whitespace-normal">
                The digital transformation can be delivered without vendor lock-in to any specific software platform. No software licenses are included.
              </div>
            </div>
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-white/20 px-4 py-3 break-words whitespace-normal">External Services</div>
              <div className="flex-[0_0_20%] border-r border-white/20 px-4 py-3 text-center break-words whitespace-normal">1.0x</div>
              <div className="flex-[0_0_50%] px-4 py-3 break-words whitespace-normal">
                For services Morero cannot provide directly, costs are passed through with no admin fee.
              </div>
            </div>
          </div>
        </div>

        {/* Cost Calculator */}
        <div>
          <h3 className="content-title text-lg mb-4">Cost Calculator</h3>
          <section className="border border-white/20 rounded-md overflow-hidden bg-gray-900/30">
            <div className="p-4 space-y-4">
              {/* Row 1: Pricing Option and Standard Days */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Pricing Option</label>
                  <Select value={selectedOption} onValueChange={(value: "option1" | "option2") => setSelectedOption(value)}>
                    <SelectTrigger className="w-full bg-gray-800 border-white/20 text-gray-300 h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1: Fixed Rate (£650/day)</SelectItem>
                      <SelectItem value="option2">Option 2: Base + Bonus (£475/day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Standard Days (per week)</label>
                  <Input
                    type="number"
                    min="0"
                    max="7"
                    value={standardDays}
                    onChange={(e) => setStandardDays(Math.max(0, Math.min(7, parseInt(e.target.value) || 0)))}
                    className="bg-gray-800 border-white/20 text-gray-300 h-9 text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Weekend/Night Work and Mileage */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Weekend/Night Work (per month)</label>
                  <Input
                    type="number"
                    min="0"
                    value={weekendNights}
                    onChange={(e) => setWeekendNights(Math.max(0, parseInt(e.target.value) || 0))}
                    className="bg-gray-800 border-white/20 text-gray-300 h-9 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Mileage (per month)</label>
                  <Input
                    type="number"
                    min="0"
                    value={mileage}
                    onChange={(e) => setMileage(Math.max(0, parseInt(e.target.value) || 0))}
                    className="bg-gray-800 border-white/20 text-gray-300 h-9 text-sm"
                  />
                </div>
              </div>

              {/* Total */}
              <div className="pt-3 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <div className="text-gray-200 font-semibold text-sm">
                    Monthly (excluding VAT)
                    {selectedOption === "option2" && (
                      <span className="text-gray-400 text-xs ml-2 italic font-normal">
                        * Excludes performance-linked bonus
                      </span>
                    )}
                  </div>
                  <span className="text-orange-400 font-bold text-lg">£{costs.monthly.subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
