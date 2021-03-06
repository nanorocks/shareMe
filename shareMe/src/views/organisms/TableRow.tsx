import React from 'react'
import { RefreshCcw } from 'react-feather'
import { IArticle } from '@interfaces/_index'
import { FirebaseUpdateDoc } from '@services/_index'
import { rollbackArticle } from '@redux/actions/articlesAction'
import { useAppDispatch } from '@hooks/redux'

type Props = {
  item: IArticle
}

export default function TableRow({ item }: Props) {

  const dispatch = useAppDispatch()

  const roolBackArticle = (item:IArticle) => {
    FirebaseUpdateDoc('articles', { isDeleted: false }, item.uid).then(res => {
      if (res) {
        dispatch(rollbackArticle({ ...item, isDeleted: false }))
      }
    })
  }

  return (
    <>
      <tr className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <a href={item.url} target={'_blank'} className={'text-indigo-700 hover:text-indigo-400'}>{item.title}</a>
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {item.category.name}
        </td>
        <td className="cursor-pointer hover:text-indigo-400 text-sm text-indigo-700 font-light px-6 py-4 whitespace-nowrap" onClick={() => roolBackArticle(item)}>
          <RefreshCcw className='inline mr-1' size={16} /> Rollback
        </td>
      </tr>
    </>
  )
}