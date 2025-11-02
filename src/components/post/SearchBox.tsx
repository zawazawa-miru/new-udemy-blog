'use client'
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SearchBox() {
    const [ search, setSearch ] = useState("")
    const [ debouncedSearch, setDebouncedSearch ] = useState("")
    const router = useRouter()

    //デバンス
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500)

        return () => clearTimeout(timer)
    }, [search])

    // debouncedSearchが更新されたら実行
    useEffect(() => {
        if(debouncedSearch.trim()) {
            router.push(`/?search=${debouncedSearch.trim()}`)
        }else {
            router.push(`/`)
        }
    }, [debouncedSearch, router])

    return (
        <>
            <Input
                placeholder="記事を検索・・・"
                className="w-[200-px] lg:w-[300-px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    );
}