import * as Popover from "@radix-ui/react-popover";
import { CalendarDays, Check } from "lucide-react";
import { format, parse } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useSearchStore } from "@/store";

export default function DateRangePickerPopover({
  label,
  style,
  isReturnDate,
}: {
  label: string;
  style?: React.CSSProperties;
  isReturnDate?: boolean;
}) {
  const { setSearchParams, searchParams } = useSearchStore();
  const [tempRange, setTempRange] = useState<DateRange | undefined>();

  const handleOnSelect = useCallback(() => {
    let from = tempRange?.from;
    let to = tempRange?.to;

    if (from && to && from > to) {
      const temp = from;
      from = to;
      to = temp;
    }

    const formattedFrom = from ? format(from, "yyyy-MM-dd") : undefined;
    const formattedTo = to ? format(to, "yyyy-MM-dd") : undefined;

    setSearchParams({
      date: formattedFrom,
      returnDate: formattedTo,
    });
  }, [setSearchParams, tempRange]);

  const displayText = useMemo(() => {
    if (!searchParams.returnDate || !searchParams.date)
      return `Select ${label}`;

    const range = {
      to: parse(searchParams.returnDate, "yyyy-MM-dd", new Date()),
      from: parse(searchParams.date, "yyyy-MM-dd", new Date()),
    } as DateRange;

    if (range.from && range.to) {
      if (isReturnDate) return format(range.to, "PP");
      return format(range.from, "PP");
    }

    return `Select ${label}`;
  }, [isReturnDate, searchParams, label]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          style={style}
          className="flex items-center justify-between w-[16rem] max-md:w-[10rem] p-3 border text-left bg-white hover:bg-gray-50"
        >
          <div className="flex items-center space-x-2">
            <CalendarDays className="text-gray-400" size={20} />
            <span className="text-sm text-gray-700">{displayText}</span>
          </div>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-white border rounded-xl shadow-lg px-5 py-2 z-50"
          sideOffset={8}
          side="bottom"
          align="start"
        >
          <DayPicker
            mode="range"
            selected={tempRange}
            onSelect={setTempRange}
            numberOfMonths={2}
            pagedNavigation
            defaultMonth={new Date()}
            disabled={{ before: new Date() }}
            className="text-sm"
            classNames={{
              day: "w-1 h-1 p-0 text-sm", // each day cell
              table: "w-full",
              months: "flex gap-4", // adjust spacing between two calendars
              caption_label: "text-sm font-medium",
              nav_button: "w-6 h-6",
            }}
          />

          <div className="flex justify-end">
            <Popover.Close asChild>
              <button
                onClick={handleOnSelect}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                <Check size={16} className="mr-1" />
                Done
              </button>
            </Popover.Close>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
