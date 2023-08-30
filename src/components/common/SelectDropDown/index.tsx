import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SelectProps = React.ComponentProps<typeof Select>
interface Props extends SelectProps {
  items: { value: string; label: string }[]
  onChange: (value: string) => void
  placeholder?: string
}

export function SelectDropDown({ items, value, onChange, placeholder }: Props) {
  return (
    <Select value={`${value}`} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map(({ value: val, label }) => (
          <SelectItem key={JSON.stringify(val)} value={val}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
