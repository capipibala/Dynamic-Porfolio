import { portfolioData } from './portfolio';
import type { PortfolioData } from '../types/portfolio';

// Reuse names, URLs, and technology tags from the main content file.
const projectDescriptions: Record<string, string> = {
    'Portfolio System':
        'Một portfolio cá nhân được xây dựng từ hệ thống thành phần giao diện riêng, ưu tiên tái sử dụng, khả năng tiếp cận và mở rộng lâu dài.',
    'UI Component Library Sandbox':
        'Không gian thử nghiệm các thành phần giao diện dùng chung, với ví dụ trên Ladle và kiểm thử bằng Testing Library.',
    'Responsive Landing Pages':
        'Bộ trang giới thiệu tối ưu cho chuyển đổi, chú trọng bố cục nội dung và hiệu năng tải trang.',
};

export const portfolioVi: PortfolioData = {
    ...portfolioData,
    siteName: 'Hồ sơ cá nhân',
    person: {
        ...portfolioData.person,
        role: 'Kỹ sư phần mềm · Giao diện, hệ thống và kiến trúc UI',
        summary:
            'Mình xây dựng sản phẩm hiện đại từ giao diện đến lập trình hệ thống, kết hợp React và TypeScript với nền tảng kỹ thuật vững chắc về C++, Rust và C# để tạo ra trải nghiệm dễ bảo trì và mở rộng.',
        location: 'Thành phố Hồ Chí Minh, Việt Nam',
        availability: 'Sẵn sàng nhận dự án tự do, tư vấn và cơ hội làm việc toàn thời gian',
    },
    navigation: [
        { label: 'Giới thiệu', href: '#about' },
        { label: 'Kỹ năng', href: '#skills' },
        { label: 'Kinh nghiệm', href: '#experience' },
        { label: 'Dự án', href: '#projects' },
        { label: 'Liên hệ', href: '#contact' },
    ],
    stats: portfolioData.stats.map((stat) => ({
        ...stat,
        label:
            (
                {
                    'Years of experience': 'Số năm kinh nghiệm',
                    'Projects delivered': 'Dự án đã hoàn thành',
                    'Primary stack': 'Công nghệ chính',
                } as Record<string, string>
            )[stat.label] ?? stat.label,
    })),
    about: [
        'Mình tập trung xây dựng giao diện có khả năng tái sử dụng cao, dễ bảo trì và nhất quán giữa các sản phẩm, từ trang giới thiệu đến công cụ nội bộ và ứng dụng quy mô lớn.',
        'Mình thích kết hợp kỹ thuật phát triển giao diện hiện đại với tư duy hệ thống, khả năng tiếp cận, thiết kế thích ứng và quy trình xây dựng thành phần có kiểm thử cùng ví dụ minh họa.',
    ],
    skillGroups: [
        { title: 'Phát triển giao diện', items: portfolioData.skillGroups[0].items },
        {
            title: 'Kỹ thuật giao diện',
            items: [
                'Hệ thống thiết kế',
                'Thiết kế thích ứng',
                'Khả năng tiếp cận',
                'Kiến trúc thành phần',
                'C++',
                'Rust',
            ],
        },
        { title: 'Đảm bảo chất lượng', items: portfolioData.skillGroups[2].items },
    ],
    experiences: [
        {
            company: 'Acme Studio',
            role: 'Kỹ sư phần mềm cao cấp',
            period: '2020 — Hiện tại',
            description:
                'Dẫn dắt phát triển giao diện sản phẩm và kiến trúc kỹ thuật ở lớp giao diện và ứng dụng, tập trung vào khả năng bảo trì, hiệu năng và trải nghiệm lập trình viên.',
            highlights: [
                'Xây dựng và chuẩn hóa các thành phần giao diện dùng chung cho nhiều nhóm phát triển.',
                'Cải thiện tính nhất quán của giao diện bằng các giá trị thiết kế, biến thể và thành phần bố cục có thể tái sử dụng.',
                'Phát triển công cụ và quy trình ứng dụng với React, C# và Rust.',
            ],
        },
        {
            company: 'Tư vấn độc lập',
            role: 'Kỹ sư phần mềm',
            period: '2014 — 2020',
            description:
                'Thiết kế và triển khai giải pháp phần mềm từ ứng dụng web đến công cụ nội bộ, cân bằng trải nghiệm người dùng với chất lượng kỹ thuật.',
            highlights: [
                'Xây dựng giao diện thích ứng, sẵn sàng đưa vào sử dụng cho nhiều nhóm khách hàng.',
                'Phát triển các giải pháp dễ bảo trì bằng TypeScript, C++, C# và sau đó là Rust.',
            ],
        },
    ],
    projects: portfolioData.projects.map((project) => ({
        ...project,
        description: projectDescriptions[project.title] ?? project.description,
    })),
    contact: {
        ...portfolioData.contact,
        intro: 'Nếu bạn đang tìm một kỹ sư phát triển giao diện có tư duy hệ thống, mình rất sẵn sàng trao đổi thêm.',
    },
};
