
export default ()=> ({

    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit vel mauris et gravida. Integer vitae posuere justo. Fusce pulvinar a dolor et fermentum. Etiam aliquam sem et nisl vulputate interdum. Aliquam tristique cursus accumsan. Nulla viverra sapien in tellus interdum, in volutpat elit tempor. ",
            picture: null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit vel mauris et gravida. Integer vitae posuere justo. Fusce pulvinar a dolor et fermentum. Etiam aliquam sem et nisl vulputate interdum. Aliquam tristique cursus accumsan. Nulla viverra sapien in tellus interdum, in volutpat elit tempor. ",
            picture: null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit vel mauris et gravida. Integer vitae posuere justo. Fusce pulvinar a dolor et fermentum. Etiam aliquam sem et nisl vulputate interdum. Aliquam tristique cursus accumsan. Nulla viverra sapien in tellus interdum, in volutpat elit tempor. ",
            picture: null
        }
    ]
})