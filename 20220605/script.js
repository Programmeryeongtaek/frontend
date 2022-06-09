const input = document.getElementById('text-input')
const button = document.getElementById('add-button')
const list = document.getElementById('list')

let count = 0;
const limit = 2;

button.addEventListener('click', () => {
    if (count >= limit) return // 갯수 제한
    if (input.value === '') return // 아무것도 입력 안 하면 안 됨

    count++

    const li = document.createElement('li')
    const checkbox = document.createElement('input')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.addEventListener('input', (e) => {
        li.className = e.target.checked ? 'done' : ''
    })

    li.appendChild(checkbox)
    li.appendChild(document.createTextNode(input.value))

    list.appendChild(li)

    input.value = ''
})
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') button.click()
    // Enter을 클릭시, 버튼 누른 것과 같은 효과
})