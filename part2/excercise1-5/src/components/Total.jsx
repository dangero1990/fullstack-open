function Total ({ course }) {
    const exercises = course.parts.map(({ exercises }) => exercises)
    const total = exercises.reduce((sum, curr) => sum + curr, 0)

    return (
        <p>total of {total} exercises</p>
    )
}

export default Total