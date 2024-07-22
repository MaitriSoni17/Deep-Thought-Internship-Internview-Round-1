try {
    const response = fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json', {
        mode: 'no-cors'
    });
    if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        throw new Error(`Network response was not ok`);
    }
    const result = response.json();
    console.log('Response:', result);
} catch (error) {
    console.error('Error:', error);
}