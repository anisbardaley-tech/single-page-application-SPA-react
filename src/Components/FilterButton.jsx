function FilterButton({ label, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={`rounded-full px-3 py-2 text-sm ${
                active
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700'
            }`}
        >
            {label}
        </button>
    )
}

export default FilterButton
