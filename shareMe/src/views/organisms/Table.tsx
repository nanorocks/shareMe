import React from 'react'
import { IArticle } from '@interfaces/_index'
import { TableRow } from '@views/organisms/_index'

type Props = {
    articles: IArticle[]
}

export default function Table({ articles }: Props) {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Article
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Category
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        To dashboard
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((item: IArticle) => {
                                    return <TableRow item={item} key={item.id}/>
                                })}
                            </tbody>
                        </table>
                        {articles.length === 0 && <div className='text-2xl font-bold text-gray-900 text-center pt-4'>No articles as history</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}