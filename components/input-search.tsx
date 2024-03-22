import { Input } from '@/components/ui/input'

interface InputSearchProps {
  placeholder: string
}

export function InputSearch({ placeholder }: InputSearchProps) {
  return <Input type='text' placeholder={placeholder} />
}
