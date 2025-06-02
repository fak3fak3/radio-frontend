import React from "react";
import { Card, InputWithSuggestions, MultiSelect } from "../../components";
import "./style.css";

type ArchiveFindResult = {
    id: number;
    title: string;
    cover: string;
    description: string;
};

const ARCHIVE_FIND_RESULTS_MOCK = [
    {
        id: 1,
        title: "Title 1",
        cover: "https://picsum.photos/200/300?random=1",
        description: "Description 1",
    },
    {
        id: 2,
        title: "Title 2",
        cover: "https://picsum.photos/200/300?random=2",

        description: "Description 2",
    },
    {
        id: 3,
        title: "Title 3",
        cover: "https://picsum.photos/200/300?random=3",

        description: "Description 3",
    },
    {
        id: 4,
        title: "Title 4",
        cover: "https://picsum.photos/200/300?random=4",

        description: "Description 4",
    },
    {
        id: 5,
        title: "Title 5",
        cover: "https://picsum.photos/200/300?random=5",

        description: "Description 5",
    },
    {
        id: 6,
        title: "Title 6",
        cover: "https://picsum.photos/200/300?random=6",

        description: "Description 6",
    },
    {
        id: 7,
        title: "Title 7",
        cover: "https://picsum.photos/200/300?random=7",

        description: "Description 7",
    },
    {
        id: 8,
        title: "Title 8",
        cover: "https://picsum.photos/200/300?random=8",

        description: "Description 8",
    },
    {
        id: 9,
        title: "Title 9",
        cover: "https://picsum.photos/200/300?random=9",

        description: "Description 9",
    },
    {
        id: 10,
        title: "Title 10",
        cover: "https://picsum.photos/200/300?random=10",

        description: "Description 10",
    },
    {
        id: 11,
        title: "Title 11",
        cover: "https://picsum.photos/200/300?random=11",

        description: "Description 11",
    },
    {
        id: 12,
        title: "Title 12",
        cover: "https://picsum.photos/200/300?random=12",

        description: "Description 12",
    },
    {
        id: 13,
        title: "Title 13",
        cover: "https://picsum.photos/200/300?random=13",

        description: "Description 13",
    },
    {
        id: 14,
        title: "Title 14",
        cover: "https://picsum.photos/200/300?random=14",

        description: "Description 14",
    },
    {
        id: 15,
        title: "Title 15",
        cover: "https://picsum.photos/200/300?random=15",
        description: "Description 15",
    },
    {
        id: 16,
        title: "Title 16",
        cover: "https://picsum.photos/200/300?random=16",
        description: "Description 16",
    },
    {
        id: 17,
        title: "Title 17",
        cover: "https://picsum.photos/200/300?random=17",
        description: "Description 17",
    },
    {
        id: 18,
        title: "Title 18",
        cover: "https://picsum.photos/200/300?random=18",
        description: "Description 18",
    },
    {
        id: 19,
        title: "Title 19",
        cover: "https://picsum.photos/200/300?random=19",
        description: "Description 19",
    },
    {
        id: 20,
        title: "Title 20",
        cover: "https://picsum.photos/200/300?random=20",
        description: "Description 20",
    },
    {
        id: 21,
        title: "Title 21",
        cover: "https://picsum.photos/200/300?random=21",
        description: "Description 21",
    },
    {
        id: 22,
        title: "Title 22",
        cover: "https://picsum.photos/200/300?random=22",
        description: "Description 22",
    },
];

const ArchivePage = () => {
    return (
        <div className="content archive-page">
            <InputWithSuggestions />
            <div className="filters">
                <MultiSelect name="media" />
                <MultiSelect name="program" />
                <MultiSelect name="tag" />
            </div>
            <div className="cards">
                {ARCHIVE_FIND_RESULTS_MOCK.map((result: ArchiveFindResult) => (
                    <Card
                        key={result.id}
                        id={result.id}
                        title={result.title}
                        cover={result.cover}
                        description={result.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArchivePage;
